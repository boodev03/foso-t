"use client";

import Image from "next/image";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const LANGUAGES = [
  {
    value: "vi",
    label: "VI",
    flag: "https://flagicons.lipis.dev/flags/4x3/vn.svg",
    alt: "Vietnam Flag",
  },
  {
    value: "en",
    label: "EN",
    flag: "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    alt: "UK Flag",
  },
];

function LanguageOption({
  flag,
  alt,
  label,
}: {
  flag: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 relative rounded-full overflow-hidden">
        <Image src={flag} alt={alt} fill className="object-cover" />
      </div>
      <span className="font-medium text-base text-primary">{label}</span>
    </div>
  );
}

interface IProps {
  showIcon?: boolean;
}

export default function SelectLanguage({ showIcon = false }: IProps) {
  const [selected, setSelected] = React.useState("vi");

  const selectedLang = LANGUAGES.find((l) => l.value === selected);

  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger
        className="w-max h-8 border-0 shadow-none bg-transparent hover:bg-brand-50 rounded-md px-2"
        showIcon={showIcon}
      >
        {/* Custom selected value: flag + label */}
        {selectedLang ? (
          <LanguageOption
            flag={selectedLang.flag}
            alt={selectedLang.alt}
            label={selectedLang.label}
          />
        ) : (
          <SelectValue placeholder="Language" />
        )}
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((lang) => (
          <SelectItem
            key={lang.value}
            value={lang.value}
            className="cursor-pointer hover:bg-gray-100"
          >
            <LanguageOption
              flag={lang.flag}
              alt={lang.alt}
              label={lang.label}
            />
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
