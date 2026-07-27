import axiosInstance from '@/lib/axios';

export interface EnquiryPayload {
  enquiryFullName: string;
  enquiryMobile: string;
  enquiryEmail: string;
  enquiryProduct: string;
  enquiryMessage: string;
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
}

export const submitEnquiry = async (payload: EnquiryPayload) => {
  const response = await axiosInstance.post('/createEnquiry', payload);
  return response.data;
};

export const submitPhoneEnquiry = async (mobile: string) => {
  const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const response = await axiosInstance.post('/panelcreateEnquiryNumber', {
    enquiryMobile: mobile,
    utm_medium: urlParams.get('utm_medium') || '',
    utm_source: urlParams.get('utm_source') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
  });
  return response.data;
};
