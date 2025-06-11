import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetch all project
  const fetcProject = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("🚨 Supabase fetch error:", error.message);
      } else {
        console.log("✅ Supabase returned data:", data); // Add this
        setProjects(data);
      }
    } catch (err) {
      console.error("❌ Unexpected fetch failure:", err);
    } finally {
      setLoading(false);
    }
  };


  const fetcProjectById = async (id) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("projects").select("*").eq("id",id).single();

      if (error) {
        console.error("🚨 Supabase fetch error:", error.message);
      } else {
        console.log("✅ Supabase returned data:", data); // Add this
        setProjects(data);
        return data;
      }
    } catch (err) {
      console.error("❌ Unexpected fetch failure:", err);
    } finally {
      setLoading(false);
    }
  };

  function normalizeProject(data) {
    if (!data || typeof data !== "object") return null;

    return {
      ...data,
      features: Array.isArray(data.features) ? data.features : [],
      technologies: Array.isArray(data.technologies) ? data.technologies : [],
      images: Array.isArray(data.images) ? data.images : [],
    };
  }

  //upload a nwe project
  const uploadProject = async (project)=>{
    const{data,error}=await supabase.from("projects").insert([project]);
    if(error) throw error
    await fetcProject();
    return { data, error: null };
  }




  //Update an existing project
  const updateProject = async (id,updatedFields) => {
    
    const {data ,error} =await supabase.from("projects").update(updatedFields).eq("id",id);
    if (error) throw error;
    await fetcProject();
    return data;
  };



  //delete a project
  const deleteProject = async (id) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) throw error;
    await fetcProject();
  };


  //handel From Submition for contents
  
  const fetchContactUS= async ()=>{
    const {data ,error} = await supabase.from("contact_us").select("*");
    if(error) throw error;
    return {data,error :null}
  }

  const submitContactUs = async(formData)=>{
    const {data,error} = await supabase.from("contact_us").insert([formData]);
    if(error) throw error;
    await fetchContactUS();
    return {data , error : null}
    
  }

  //handel submit Book a Call
  
  const fetchBookACall=async()=>{
    const {data, error }= await supabase.from("book_a_call").insert("*");
    if(error) throw error;
    return {data,error : error};
  }

  const submitBookACall = async (formData) => {
    const {data, error }= await supabase.from("book_a_call").insert([formData])
    if(error) throw error;
    await fetchBookACall();
    return {data,error : null}

  };



  useEffect(()=>{
    fetcProject()
  },[])
  

  return <DataContext.Provider value={{projects,loading,fetcProject,normalizeProject,fetcProjectById,uploadProject,updateProject,deleteProject,fetchContactUS,submitContactUs,fetchBookACall,submitBookACall}}>{children}</DataContext.Provider>;
};
