"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Mail, Globe, Calendar, Phone, MapPin, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import TopBar from "./ui/topbar";

function UserDetails() {
  return (
    <div>  
        <Card className="w-full max-w-3xl mx-auto mt-10 rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Mr Rindra Hosea</h2>
                <div className="flex items-center mt-2">
                  <Image
                    src="/user-avatar.png"
                    alt="User photo"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>rindra@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>French</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end text-sm text-gray-600 space-y-1">
                <p className="flex items-center space-x-1">
                  <span>Male</span>
                </p>
                <p className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>1990-01-01</span>
                </p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <Phone className="w-5 h-5 mr-2 text-gray-500" /> Contact
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="text-sm">Phone</p>
                  <p className="font-medium text-gray-800 dark:text-gray-300">0344444444</p>
                </div>
                <div>
                  <p className="text-sm">Cell</p>
                  <p className="font-medium text-gray-800 dark:text-gray-300">0344423323</p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <MapPin className="w-5 h-5 mr-2 text-gray-500" /> Localisation
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="font-medium">Street</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    123 Main Street
                    <br />
                    Rue Exemple
                  </p>
                </div>
                <div>
                  <p className="font-medium">City</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">
                    Paris
                    <br />
                    Ile-de-France
                    <br />
                    75000
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-800 dark:text-gray-500 bg-gray-200 dark:bg-[#111637] px-4 py-2 rounded-md border border-gray-300 dark:border-none mb-3">
                <Info className="w-5 h-5 mr-2 text-gray-500" /> Information personnelle
              </h3>
              <div className="flex justify-between text-gray-600">
                <div>
                  <p className="text-sm">Seed</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">example-seed</p>
                </div>
                <div>
                  <p className="text-sm">Page</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">1</p>
                </div>
                <div>
                  <p className="text-sm">Résultat</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">OK</p>
                </div>
                <div>
                  <p className="text-sm">Version</p>
                  <p className="text-sm text-gray-800 dark:text-gray-300">v1.0</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
    </div>
  );
}
export default UserDetails;

