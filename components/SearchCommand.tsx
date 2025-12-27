import { CommandDialog } from "cmdk";
import { useEffect, useState } from "react";
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Button } from "./ui/button";

const SearchCommand = ({
  renderAs='button',
  label='Add stock',
  initialStocks,
}: SearchCommandProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault;
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSelectStock = (value:string) => {
    console.log('Stock selected')
    setOpen(false)
  };
  return (
    <>
    {renderAs == 'text' ? <span>{label}</span> : <Button>{label}</Button>}
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        value={searchTerm}
        onValueChange={setSearchTerm}
        placeholder="Search stocks ... "
        />
      <CommandList>
        <CommandEmpty>
          {loading ? "Loading ... " : "No results."}
        </CommandEmpty>
        <CommandGroup heading="Stocks">
          <CommandItem value="AAPL" onSelect={handleSelectStock}>
            AAPL
          </CommandItem>
          <CommandItem value="GOOGL" onSelect={handleSelectStock}>
            G0QGL
          </CommandItem>
          <CommandItem value="MSFT" onSelect={handleSelectStock}>
            MSET
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </ CommandDialog>
  </>
  );
  
};

export default SearchCommand;
