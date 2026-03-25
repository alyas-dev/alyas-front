"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/providers/AuthProvider";
import { authClient } from "@/lib/auth-client";
import { Settings2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";

function SettingsContent() {
  const { session, isLoading } = useAuth();
  const user = session?.user;
  const [currentTab, setCurrentTab] = useState("profile");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Profile form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Profile picture upload states
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Handle URL tab parameter
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["profile"].includes(tab)) {
      setCurrentTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", value);
    router.replace(url.pathname + url.search, { scroll: false });
  };

  const handleUpdateProfile = async () => {
    try {
      await authClient.updateUser({ name });
      toast.success("Profile updated successfully");
    } catch {
      toast.error("Failed to update profile");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadProfilePicture = async () => {
    if (!profileImage) return;

    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", profileImage);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { url } = await response.json();
        await authClient.updateUser({ name, image: url });
        setImagePreview(null);
        setProfileImage(null);
        toast.success("Profile picture updated successfully");
      } else {
        throw new Error("Upload failed");
      }
    } catch {
      toast.error("Failed to upload profile picture");
    } finally {
      setUploadingImage(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 p-6">
        <div>
          <Skeleton className="h-9 w-32 mb-2 bg-gray-200 dark:bg-gray-800" />
          <Skeleton className="h-5 w-80 bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="w-full max-w-4xl">
          <div className="flex space-x-1 mb-6">
            <Skeleton className="h-10 w-20 bg-gray-200 dark:bg-gray-800" />
          </div>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-40 bg-gray-200 dark:bg-gray-800" />
              <Skeleton className="h-4 w-72 bg-gray-200 dark:bg-gray-800" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Skeleton className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-800" />
                <Skeleton className="h-10 w-full bg-gray-200 dark:bg-gray-800" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="w-full max-w-4xl"
      >
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings2 className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Update your personal information and profile settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={imagePreview || user?.image || ""} />
                  <AvatarFallback>
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        document.getElementById("profile-image-input")?.click()
                      }
                      disabled={uploadingImage}
                    >
                      {uploadingImage ? "Uploading..." : "Change Photo"}
                    </Button>
                    {profileImage && (
                      <Button
                        size="sm"
                        onClick={handleUploadProfilePicture}
                        disabled={uploadingImage}
                      >
                        Save
                      </Button>
                    )}
                    {imagePreview && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setImagePreview(null);
                          setProfileImage(null);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                  <input
                    id="profile-image-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <p className="text-sm text-muted-foreground">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    disabled
                  />
                </div>
              </div>

              <Button onClick={handleUpdateProfile}>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col gap-6 p-6">
          <div>
            <div className="h-9 w-32 mb-2 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md" />
            <div className="h-5 w-80 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md" />
          </div>
        </div>
      }
    >
      <SettingsContent />
    </Suspense>
  );
}
