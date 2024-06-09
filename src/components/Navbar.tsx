"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null)
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Web Development"
                                description="Learn how to build websites and web applications."
                                href="/web-dev"
                                src="/web-dev.svg"
                            />
                            <ProductItem
                                title="Interface Design"
                                description="Learn how to design user interfaces."
                                href="/interface-design"
                                src="/interface-design.svg"
                            />
                            <ProductItem
                                title="Search Engine Optimization"
                                description="Learn how to optimize websites for search engines."
                                href="/seo"
                                src="/seo.svg"
                            />
                            <ProductItem
                                title="Branding"
                                description="Learn how to create a brand identity."
                                href="/branding"
                                src="/branding.svg"
                            />
                        </div>
                    </MenuItem>
                </Link>
                <Link href={"/all-courses"}>
                    <MenuItem setActive={setActive} active={active} item="Our courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/all-courses">All courses</HoveredLink>
                            <HoveredLink href="/music-theory">Basic Music Theory</HoveredLink>
                            <HoveredLink href="/song-writting">songwritting</HoveredLink>
                            <HoveredLink href="/music-production">Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Contact">
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navbar