"use client";
import { createContext, useContext } from "react";

export const SidebarCtx = createContext<{ toggle: () => void }>({ toggle: () => {} });
export const useAdminSidebar = () => useContext(SidebarCtx);
