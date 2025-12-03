"use client";

import React from "react";
import { Input } from "@/modules/components/ui/input";
import { Label } from "@/modules/components/ui/label";
import { Textarea } from "@/modules/components/ui/textarea";
import { Button } from "@/modules/components/ui/button";
import { toast } from "sonner";
import { sendEmail } from "@/server/sendEmail";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const loadingToast = toast.loading("Sending your message...", {
      description: "Please wait while we process your request",
    });

    try {
      const result = await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (result?.data?.success) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully! ✨", {
          id: loadingToast,
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        });
      } else {
        toast.error("Failed to send message ❌", {
          id: loadingToast,
          description: "Please check your connection and try again.",
          duration: 5000,
        });
      }
    } catch {
      toast.error("Something went wrong ❌", {
        id: loadingToast,
        description: "Unable to send message. Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#002569]">
      <div className="pt-24 pb-24">
        {/* Title */}
        <h2 className="font-alexandria font-light text-[60px] leading-[48.8px] text-white mb-4">
          Reach Out to Us
        </h2>

        {/* Description */}
        <p className="font-alexandria font-light text-[20px] leading-[23px] text-[#CFCFCF] mb-12 max-w-[1251px]">
          This text is an example of text that can be replaced in the same space, this text has been generated from the Arabic text generator, where you can generate such text
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 max-w-[1251px]">
            {/* Name Field */}
            <div className="space-y-3">
              <Label 
                htmlFor="name" 
                className="font-alexandria font-normal text-[20px] leading-[24.4px] text-white"
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your first name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[60px] bg-transparent border border-white rounded-md font-alexandria font-normal text-[14px] leading-[17.1px] text-white placeholder:text-[#FFFFFFA1] px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <Label 
                htmlFor="email" 
                className="font-alexandria font-normal text-[20px] leading-[24.4px] text-white"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youre@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-[60px] bg-transparent border border-white rounded-md font-alexandria font-normal text-[14px] leading-[17.1px] text-white placeholder:text-[#FFFFFFA1] px-4 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-3">
              <Label 
                htmlFor="message" 
                className="font-alexandria font-normal text-[20px] leading-[24.4px] text-white"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write the message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-[265px] bg-transparent border border-white rounded-md font-alexandria font-normal text-[14px] leading-[17.1px] text-white placeholder:text-[#FFFFFFA1] px-4 py-4 resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-[176px] h-[52px] border border-white rounded-md bg-transparent font-alexandria font-normal text-[16px] leading-[19.5px] text-center text-[#FAFAFF] hover:bg-white/10 shadow-[inset_0px_2px_2px_0px_rgba(255,255,255,0.4),inset_0px_-3px_5px_0px_rgba(0,14,15,0.2),0px_1px_1px_0px_rgba(0,10,10,0.5),0px_4px_6px_0px_rgba(0,10,10,0.2)]"
            >
              {isSubmitting ? "Sending..." : "Send a Message"}
            </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
