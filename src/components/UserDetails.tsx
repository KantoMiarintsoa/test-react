"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Mail, Globe, Calendar, Phone, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import TopBar from "./ui/topbar";
import { Info as UserInfo, User } from "@/type";
import { useTranslations } from 'next-intl';

function UserDetails({user, info}:{user:User, info:UserInfo}) {
  const t=useTranslations()
  return (
    <div>  
        <Card className="w-full max-w-3xl mx-auto mt-10 rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {user.name.title} {user.name.first} {user.name.last}
                </h2>
                <div className="flex items-center mt-2">
                  <Image
                    src={user.picture.large}
                    alt="User photo"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{user.nat}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-600 space-y-1">
                <p className="flex items-center space-x-1">
                  <span>{t(user.gender)}</span>
                </p>
                <p className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{user.dob.date}</span>
                </p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <Phone className="w-5 h-5 mr-2 text-gray-500" /> {t("contact")}
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="text-sm">{t("phone")}</p>
                  <p className="font-medium text-gray-800 dark:text-gray-300">{user.phone}</p>
                </div>
                <div>
                  <p className="text-sm">{t("cell")}</p>
                  <p className="font-medium text-gray-800 dark:text-gray-300">{user.cell}</p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" /> {t("location")}
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="font-medium">{t("street")}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    {user.location.street.name}
                    <br />
                    {user.location.street.number}
                  </p>
                </div>
                <div>
                  <p className="font-medium">{user.location.city}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    {user.location.state}
                    <br />
                    {user.location.country}
                    <br />
                    {user.location.state}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <Info className="w-5 h-5 mr-2 text-gray-500" />{t("info")}
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="text-sm">{t("seed")}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{info.seed}</p>
                </div>
                <div>
                  <p className="text-sm">{t("page")}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{info.page}</p>
                </div>
                <div>
                  <p className="text-sm">{t("result")}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{info.results}</p>
                </div>
                <div>
                  <p className="text-sm">{t("version")}</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">{info.version}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
export default UserDetails;

