"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft } from "lucide-react";
import { toolService } from "@/services/tool/index";

export const toolSchema = z.object({
  sqlQuery: z.string(), // No need for optional since you want to make HTTP request
});

export type ToolSchema = z.output<typeof toolSchema>;

type FormStepProps<T> = {
  defaultValues: T;
};

export const ValidateQuery = ({ defaultValues }: FormStepProps<ToolSchema>) => {
  const form = useForm({
    defaultValues,
  });
  const [output, setOutput] = useState(""); // State to store output/error message

  const handleSubmit = async (data: ToolSchema) => {
    try {
      const response = await toolService.checkSqlCode(data.sqlQuery);
      // Assuming your API returns some output message
      setOutput(response.data.output);
    } catch (err: any) {
      // Handle error
      setOutput(err.message);
    }
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex justify-center ">
          <div className="flex gap-y-10">
            <div className="grid w-full gap-2">
              <Card className="w-full max-w-lg">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <Label className="text-lg font-medium" htmlFor="sql">
                      Enter your SQL query
                    </Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Make sure to write a valid SQL query.
                    </p>
                    <Input
                      className="min-h-[100px]"
                      id="sql"
                      placeholder="Enter your SQL query here."
                      {...form.register("sqlQuery")}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => form.reset}>
                      Clear
                    </Button>
                    <Button type="submit">Validate</Button>
                  </div>
                </CardFooter>
              </Card>
            </div>

            <div className="m-24 ml-5 hidden lg:ml-5 lg:flex ">
              <ArrowRightLeft className="flex lg:h-12 lg:w-12" />
            </div>
            <Card className="w-full">
              <CardHeader className="p-4 text-sm font-medium">
                Output
              </CardHeader>
              <CardContent className="p-4 text-sm">
                <div className="grid w-full gap-2">
                  <p>{output}</p>
                </div>
              </CardContent>
            </Card>
          </div>{" "}
        </div>
      </form>
    </>
  );
};
