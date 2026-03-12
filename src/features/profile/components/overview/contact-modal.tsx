"use client";

import { CheckCircleIcon, Loader2Icon, SendIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

      if (!accessKey) {
        throw new Error("Missing Web3Forms Access Key. Please provide one.");
      }

      const response = await fetch(`https://api.web3forms.com/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          message: data.message,
          subject: `New Portfolio Message from ${data.name}`,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Form transmission failed:", error);
      alert(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);

      if (isSuccess) {
        setTimeout(() => {
          setIsSuccess(false);
          reset();
          onClose();
        }, 3000);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-edge bg-background p-6 text-foreground shadow-2xl duration-500 ease-out data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0 data-[state=closed]:zoom-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0 data-[state=open]:zoom-in-0 sm:max-w-[425px] sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-heading text-2xl font-semibold tracking-tight">
            Let&apos;s Connect <span className="animate-pulse">_</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Drop me a message and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex animate-in flex-col items-center justify-center space-y-4 py-12 text-center duration-300 fade-in zoom-in">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted">
              <CheckCircleIcon className="size-8 text-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-medium text-foreground">
                Message Sent!
              </h3>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="border-edge bg-muted/40 text-foreground placeholder:text-muted-foreground focus-visible:ring-foreground/20"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-edge bg-muted/40 text-foreground placeholder:text-muted-foreground focus-visible:ring-foreground/20"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Hey Aditya, I'd love to chat about..."
                className="min-h-[120px] resize-none border-edge bg-muted/40 text-foreground placeholder:text-muted-foreground focus-visible:ring-foreground/20"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-lg border border-foreground bg-foreground px-4 py-3 font-medium text-background transition-all hover:bg-foreground/90 focus:ring-2 focus:ring-foreground/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2Icon className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </span>
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
