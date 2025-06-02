"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SeatColor = "black" | "grey" | "beige" | "red";
type CenterPaddingColor = SeatColor;
type ArmrestColor = SeatColor;
type HeadrestOption = "with-headrest" | "no-headrest";
type HeadrestColor = SeatColor;
type SideInlayColor = SeatColor;

export default function CarSeatCustomizer() {
  const [centerPaddingColor, setCenterPaddingColor] =
    useState<CenterPaddingColor>("black");
  const [armrestColor, setArmrestColor] = useState<ArmrestColor>("black");
  const [headrestOption, setHeadrestOption] =
    useState<HeadrestOption>("with-headrest");
  const [headrestColor, setHeadrestColor] = useState<HeadrestColor>("black");
  const [sideInlayColor, setSideInlayColor] = useState<SideInlayColor>("black");

  const colorOptions: { value: SeatColor; label: string; bgClass: string }[] = [
    { value: "black", label: "Black", bgClass: "bg-black" },
    { value: "grey", label: "Grey", bgClass: "bg-gray-400" },
    { value: "beige", label: "Beige", bgClass: "bg-yellow-200" },
    { value: "red", label: "Beige", bgClass: "bg-red-500" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Preview */}
      <div className="relative h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="relative w-[300px] h-[400px]">

          
          {/* Base Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src={`/images/base/exclusive-layers-min.png`}
              alt={``}
              fill
               sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain"
              priority
            />
          </div>

          {/* Center padding */}
          <div className="absolute inset-0 z-30">
            <Image
              src={`/images/center-padding/center-${centerPaddingColor}.png`}
              alt={`Center padding ${centerPaddingColor}`}
              fill
               sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain"
              priority
            />
          </div>

          {/* side inlay */}
          <div className="absolute inset-0 z-35">
            <Image
              src={`/images/sideinlays/side-${sideInlayColor}.png`}
              alt={`Side inlay ${sideInlayColor}`}
              fill
               sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain"
              priority
            />
          </div>
          {/* Armrest */}
          <div className="absolute inset-0 z-40">
            <Image
              src={`/images/armrest/armrest-${armrestColor}.png`}
              alt={`Armrest ${armrestColor}`}
              fill
               sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain"
              priority
            />
          </div>

          {/* Headrest */}
          {headrestOption === "with-headrest" && (
            <div className="absolute inset-0 z-50">
              <Image
                src={`/images/headrest/headrest-${headrestColor}.png`}
                alt={`Headrest in ${headrestColor}`}
                fill
                 sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Tabs defaultValue="seat">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="center">Center</TabsTrigger>
            <TabsTrigger value="side">Side Inlay</TabsTrigger>
            <TabsTrigger value="armrest">Armrest</TabsTrigger>
            <TabsTrigger value="headrest">Headrest</TabsTrigger>
          </TabsList>

       
          <TabsContent value="center" className="space-y-4">
            <h2 className="text-lg font-medium">Select Center Padding Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setCenterPaddingColor(color.value)}
                  className={`w-12 h-12 rounded-full ${color.bgClass} ${
                    centerPaddingColor === color.value
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                  aria-label={`Select ${color.label} color for center padding`}
                />
              ))}
            </div>
          </TabsContent>
         
          <TabsContent value="side" className="space-y-4">
            <h2 className="text-lg font-medium">Select Side Inlay Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSideInlayColor(color.value)}
                  className={`w-12 h-12 rounded-full ${color.bgClass} ${
                    sideInlayColor === color.value
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                />
              ))}
            </div>
          </TabsContent>

         
          <TabsContent value="armrest" className="space-y-4">
            <h2 className="text-lg font-medium">Select Armrest Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setArmrestColor(color.value)}
                  className={`w-12 h-12 rounded-full ${color.bgClass} ${
                    armrestColor === color.value
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                  aria-label={`Select ${color.label} color for armrest`}
                />
              ))}
            </div>
          </TabsContent>

      
          <TabsContent value="headrest" className="space-y-4">
            {headrestOption === "with-headrest" && (
              <>
                <h2 className="text-lg font-medium">Select Headrest Color</h2>
                <div className="flex gap-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setHeadrestColor(color.value)}
                      className={`w-12 h-12 rounded-full ${color.bgClass} ${
                        headrestColor === color.value
                          ? "ring-2 ring-offset-2 ring-black"
                          : ""
                      }`}
                      aria-label={`Select ${color.label} color for headrest`}
                    />
                  ))}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>

        {/* Summary with details*/}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-medium mb-4">Current Selection</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Center Padding:</span>{" "}
              {centerPaddingColor}
            </li>
            <li>
              <span className="font-medium">Side Inlay:</span> {sideInlayColor}
            </li>
            <li>
              <span className="font-medium">Armrest:</span> {armrestColor}
            </li>
            <li>
              <span className="font-medium">Headrest:</span> {headrestOption}
            </li>
            <li>
              <span className="font-medium">Headrest Color:</span>{" "}
              {headrestColor}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
