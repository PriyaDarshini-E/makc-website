import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { submitEnquiry } from "../api/contact.api";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Invalid email address"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const useContactForm = () => {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      services: [],
    },
  });

  const mutation = useMutation({
    mutationFn: submitEnquiry,
    onSuccess: (data, variables) => {
      console.log("Form data submitted successfully: ", variables, "Response:", data);
      toast.success("Message sent successfully! We will get back to you soon.");
      reset();
    },
    onError: (error: any) => {
      console.error("Error submitting form: ", error);
      toast.error(error?.response?.data?.message || error.message || "Failed to send message. Please try again later.");
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate({
      enquiryFullName: data.name,
      enquiryMobile: data.phone,
      enquiryEmail: data.email,
      enquiryProduct: data.services.join(", "),
      enquiryMessage: data.message,
      utm_medium: searchParams.get("utm_medium") || "",
      utm_source: searchParams.get("utm_source") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: mutation.isPending,
    setValue,
    watch,
    control,
    reset,
  };
};
