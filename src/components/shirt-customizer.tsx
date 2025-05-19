"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ShirtColor = "white" | "black" | "grey"
type SleeveType = "short" | "long"
type PocketOption = "with-pocket" | "no-pocket"

export default function ShirtCustomizer() {

  const [baseColor, setBaseColor] = useState<ShirtColor>("white")
  const [sleeveType, setSleeveType] = useState<SleeveType>("short")
  const [sleeveColor, setSleeveColor] = useState<ShirtColor>("white")
  const [pocketOption, setPocketOption] = useState<PocketOption>("no-pocket")
  const [pocketColor, setPocketColor] = useState<ShirtColor>("white")//state management

  const colorOptions: { value: ShirtColor; label: string; bgClass: string }[] = [
    { value: "white", label: "White", bgClass: "bg-white border border-gray-300" },
    { value: "black", label: "Black", bgClass: "bg-black" },
    { value: "grey", label: "Grey", bgClass: "bg-gray-400" },
  ]//color options

  return (
    <div className="grid md:grid-cols-2 gap-8">
     
      <div className="relative h-[500px] bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="relative w-[300px] h-[400px]">
       {/* base image section */}
          <div className="absolute inset-0 z-10">
            <Image
              src={`/images/base/shirt-${baseColor}-base.png`}
              alt={`${baseColor} shirt`}
              fill
              className="object-contain"
              priority
            />
          </div>   
 
   {/* sleeve image section */}
          <div className="absolute inset-0 z-20">
            <Image
              src={`/images/sleeves/shirt-${sleeveColor}-${sleeveType}-sleeve.png`}
              alt={`${sleeveType} sleeves in ${sleeveColor}`}
              fill
              className="object-contain"
              priority
            />
          </div>

           {/* pocket image section */}
          {pocketOption === "with-pocket" && (
            <div className="absolute inset-0 z-30">
              <Image
                src={`/images/pockets/shirt-${pocketColor}-pocket.png`}
                alt={`shirt pocket in ${pocketColor}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>
      </div>
 {/* tabs for sleeve,pocket and base */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Tabs defaultValue="color">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="color">Base Color</TabsTrigger>
            <TabsTrigger value="sleeves">Sleeves</TabsTrigger>
            <TabsTrigger value="pocket">Pocket</TabsTrigger>
          </TabsList>

          {/* color selection panel */}
          <TabsContent value="color" className="space-y-4">
            <h2 className="text-lg font-medium">Select Base Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((colorOption) => (
                <button
                  key={colorOption.value}
                  onClick={() => setBaseColor(colorOption.value)}
                  className={`w-12 h-12 rounded-full ${colorOption.bgClass} flex items-center justify-center ${
                    baseColor === colorOption.value ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  aria-label={`Select ${colorOption.label} color for base`}
                />
              ))}
            </div>
          </TabsContent>
          {/* tab selection for short or long sleeve */}
          <TabsContent value="sleeves" className="space-y-4">
            <h2 className="text-lg font-medium">Select Sleeve Type</h2>
            <div className="flex gap-4 mb-6">
              <Button variant={sleeveType === "short" ? "default" : "outline"} onClick={() => setSleeveType("short")}>
                Short Sleeves
              </Button>
              <Button variant={sleeveType === "long" ? "default" : "outline"} onClick={() => setSleeveType("long")}>
                Long Sleeves
              </Button>
            </div>
{/* tab selection for sleeve color */}
            <h2 className="text-lg font-medium">Select Sleeve Color</h2>
            <div className="flex gap-4">
              {colorOptions.map((colorOption) => (
                <button
                  key={colorOption.value}
                  onClick={() => setSleeveColor(colorOption.value)}
                  className={`w-12 h-12 rounded-full ${colorOption.bgClass} flex items-center justify-center ${
                    sleeveColor === colorOption.value ? "ring-2 ring-offset-2 ring-black" : ""
                  }`}
                  aria-label={`Select ${colorOption.label} color for sleeves`}
                />
              ))}
            </div>
          </TabsContent>

       {/* tab selection for pocket */}
          <TabsContent value="pocket" className="space-y-4">
            <h2 className="text-lg font-medium">Pocket Option</h2>
            <div className="flex gap-4 mb-6">
              <Button
                variant={pocketOption === "no-pocket" ? "default" : "outline"}
                onClick={() => setPocketOption("no-pocket")}
              >
                No Pocket
              </Button>
              <Button
                variant={pocketOption === "with-pocket" ? "default" : "outline"}
                onClick={() => setPocketOption("with-pocket")}
              >
                With Pocket
              </Button>
            </div>

            {pocketOption === "with-pocket" && (
              <>
                <h2 className="text-lg font-medium">Select Pocket Color</h2>
                <div className="flex gap-4">
                  {colorOptions.map((colorOption) => (
                    <button
                      key={colorOption.value}
                      onClick={() => setPocketColor(colorOption.value)}
                      className={`w-12 h-12 rounded-full ${colorOption.bgClass} flex items-center justify-center ${
                        pocketColor === colorOption.value ? "ring-2 ring-offset-2 ring-black" : ""
                      }`}
                      aria-label={`Select ${colorOption.label} color for pocket`}
                    />
                  ))}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
{/* panel to show current selection details respectively */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-medium mb-4">Current Selection</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Base Color:</span> {baseColor.charAt(0).toUpperCase() + baseColor.slice(1)}
            </li>
            <li>
              <span className="font-medium">Sleeves:</span> {sleeveType === "short" ? "Short Sleeves" : "Long Sleeves"}
            </li>
            <li>
              <span className="font-medium">Sleeve Color:</span>{" "}
              {sleeveColor.charAt(0).toUpperCase() + sleeveColor.slice(1)}
            </li>
            <li>
              <span className="font-medium">Pocket:</span>{" "}
              {pocketOption === "with-pocket" ? "With Pocket" : "No Pocket"}
            </li>
            {pocketOption === "with-pocket" && (
              <li>
                <span className="font-medium">Pocket Color:</span>{" "}
                {pocketColor.charAt(0).toUpperCase() + pocketColor.slice(1)}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
