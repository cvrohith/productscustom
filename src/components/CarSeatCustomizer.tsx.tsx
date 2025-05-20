

"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type SeatColor = "black" | "grey" | "beige"
type CenterPaddingColor = SeatColor
type ArmrestColor = SeatColor
type HeadrestOption = "with-headrest" | "no-headrest"
type HeadrestColor = SeatColor

export default function CarSeatCustomizer() {
 
  const [centerPaddingColor, setCenterPaddingColor] = useState<CenterPaddingColor>("black")
  const [armrestColor, setArmrestColor] = useState<ArmrestColor>("black")
  const [headrestOption, setHeadrestOption] = useState<HeadrestOption>("with-headrest")
  const [headrestColor, setHeadrestColor] = useState<HeadrestColor>("black")

  const colorOptions: { value: SeatColor; label: string; bgClass: string }[] = [
    { value: "black", label: "Black", bgClass: "bg-black" },
    { value: "grey", label: "Grey", bgClass: "bg-gray-400" },
    { value: "beige", label: "Beige", bgClass: "bg-yellow-200" },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Preview */}
      <div className="relative h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="relative w-[300px] h-[400px]">
     {/* Base Image */}
     <div className="absolute inset-0 z-10">
            <Image
              src={`/images/base/exclusive-layers-min.jpg`}
              alt={`Center padding ${centerPaddingColor}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Center padding */}
          <div className="absolute inset-0 z-20">
            <Image
              src={`/images/center-padding/center-${centerPaddingColor}.png`}
              alt={`Center padding ${centerPaddingColor}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Armrest */}
          <div className="absolute inset-0 z-30">
            <Image
              src={`/images/armrest/armrest-${armrestColor}.png`}
              alt={`Armrest ${armrestColor}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Headrest */}
          {headrestOption === "with-headrest" && (
            <div className="absolute inset-0 z-40">
              <Image
                src={`/images/headrest/headrest-${headrestColor}.png`}
                alt={`Headrest in ${headrestColor}`}
                fill
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
            <TabsTrigger value="armrest">Armrest</TabsTrigger>
            <TabsTrigger value="headrest">Headrest</TabsTrigger>
          </TabsList>


          {/* Center Padding */}
          <TabsContent value="center" className="space-y-4">
            <h2 className="text-lg font-medium">Select Center Padding Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setCenterPaddingColor(color.value)}
                  className={`w-12 h-12 rounded-full ${color.bgClass} ${
                    centerPaddingColor === color.value ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  aria-label={`Select ${color.label} color for center padding`}
                />
              ))}
            </div>
          </TabsContent>

          {/* Armrest */}
          <TabsContent value="armrest" className="space-y-4">
            <h2 className="text-lg font-medium">Select Armrest Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setArmrestColor(color.value)}
                  className={`w-12 h-12 rounded-full ${color.bgClass} ${
                    armrestColor === color.value ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  aria-label={`Select ${color.label} color for armrest`}
                />
              ))}
            </div>
          </TabsContent>

          {/* Headrest */}
          <TabsContent value="headrest" className="space-y-4">
            <h2 className="text-lg font-medium">Headrest Option</h2>
            <div className="flex gap-4 mb-4">
              <Button
                variant={headrestOption === "no-headrest" ? "default" : "outline"}
                onClick={() => setHeadrestOption("no-headrest")}
              >
                No Headrest
              </Button>
              <Button
                variant={headrestOption === "with-headrest" ? "default" : "outline"}
                onClick={() => setHeadrestOption("with-headrest")}
              >
                With Headrest
              </Button>
            </div>

            {headrestOption === "with-headrest" && (
              <>
                <h2 className="text-lg font-medium">Select Headrest Color</h2>
                <div className="flex gap-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setHeadrestColor(color.value)}
                      className={`w-12 h-12 rounded-full ${color.bgClass} ${
                        headrestColor === color.value ? "ring-2 ring-offset-2 ring-black" : ""
                      }`}
                      aria-label={`Select ${color.label} color for headrest`}
                    />
                  ))}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>

        {/* Summary */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-medium mb-4">Current Selection</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">Center Padding:</span> {centerPaddingColor}</li>
            <li><span className="font-medium">Armrest:</span> {armrestColor}</li>
            <li><span className="font-medium">Headrest:</span> {headrestOption}</li>
            {headrestOption === "with-headrest" && (
              <li><span className="font-medium">Headrest Color:</span> {headrestColor}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}