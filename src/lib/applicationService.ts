import { supabase } from "@/lib/supabase";

export const submitApplication = async (formData: any) => {
  const payload = {
    name: formData.name,
    email: formData.email,
    contact: formData.contact,
    dob: formData.dob,
    qualification:
      formData.qualification === "Other"
        ? formData.customQualification
        : formData.qualification,
    location: formData.location,
    address: formData.address,
  };

  const { data, error } = await supabase
    .from("applications")
    .insert([payload])
    .select();

  if (error) {
    throw error;
  }

  return data;
};