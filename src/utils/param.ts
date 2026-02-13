import { Request } from "express";

export function param(req: Request, name: string): string {
  const val = req.params[name] as string | string[];
  if (Array.isArray(val)) return val[0];
  return val as string;
}
