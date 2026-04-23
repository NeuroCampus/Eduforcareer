import { supabase } from "@/lib/supabase";

export const submitContactForm = async (formData: any) => {
  const { data, error } = await supabase
    .from("general_enquiry")
    .insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        message: formData.message,
      },
    ]);

  if (error) throw error;

  return data;
};