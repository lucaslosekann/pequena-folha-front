import * as React from "react";

import { X, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "./ui/checkbox";

export type OptionType = {
    label: string;
    value: string;
};

interface MultiSelectProps {
    options: OptionType[];
    selected: string[];
    onChange: (selected: string[]) => void;
    className?: string;
}

export default function MultiSelect({ options, selected, onChange, className, ...props }: MultiSelectProps) {
    const [open, setOpen] = React.useState(false);

    const handleUnselect = (item: string) => {
        onChange(selected.filter((i) => i !== item));
    };

    return (
        <Popover open={open} onOpenChange={setOpen} {...props}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`h-auto w-full justify-between`}
                    onClick={() => setOpen(!open)}
                >
                    <div className="flex flex-wrap items-center gap-1 text-black">
                        {selected.map((item) => (
                            <Badge variant="secondary" key={item} className="text-md" onClick={() => handleUnselect(item)}>
                                {options.find((v) => v.value == item)?.label ?? item}
                                <div
                                    className="ring-offset-background focus:ring-ring ml-1 rounded-full outline-none focus:ring-2 focus:ring-offset-2"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleUnselect(item);
                                        }
                                    }}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}
                                    onClick={() => handleUnselect(item)}
                                >
                                    <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                                </div>
                            </Badge>
                        ))}
                    </div>
                    <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <div className="flex w-full min-w-48 flex-col gap-4 p-4">
                    {options.map((op) => (
                        <div key={op.value} className="flex gap-2">
                            <Checkbox
                                id={op.value}
                                checked={selected.includes(op.value)}
                                onCheckedChange={(c) => {
                                    if (!c) {
                                        handleUnselect(op.value);
                                    } else {
                                        onChange([...selected, op.value]);
                                    }
                                }}
                            />
                            <label htmlFor={op.value} className="text-sm font-medium leading-none">
                                {op.label}
                            </label>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
