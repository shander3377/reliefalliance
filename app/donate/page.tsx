"use client";
"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {Tooltip} from "@nextui-org/tooltip";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/dropdown";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import { NameIcon, DOBIcon, MailIcon, LockIcon, DonateIcon, LocationIcon } from "@/components/icons";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import signIn from "@/firebase/auth/signin";
import signUp from "@/firebase/auth/signup";
import addData from "@/firebase/firestore/addData";
import logout from "@/firebase/auth/logout";
import { useRouter } from "next/navigation";
import {Checkbox} from "@nextui-org/checkbox";


// onOpen();
export default function DonatePage() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	return (
    <>
     
     <Tooltip showArrow={true} content="Click here to donate any item. *we don't take any share in the donation given as we are operating as a non-profit organisation"><Button onPress={onOpen} color="primary">Donate Now</Button></Tooltip>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Donation</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <DonateIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
				  
                 
                  label="Item"
                  placeholder="Item for donation"
                  variant="bordered"
                />
                <Input
                autoFocus
                endContent={
                  <LocationIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                  
                  label="Location"
                  placeholder="Adress"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
               
                  <Link color="primary" href="#" size="sm">
                    We don't take any share in the donation as being a non-profit organisation
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Donate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
    
  );
  
				}

