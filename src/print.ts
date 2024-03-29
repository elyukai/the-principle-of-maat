import { Card, CardName, Gem } from './defs'

const printDecorations = (xs: Gem[]) => [...xs] .sort () .map (e => Gem [e]) .join (", ")

const fillSpace =
  (str1: string) =>
  (str2: string) =>
    str1 .length > str2 .length
    ? [str1, str2 + " " .repeat (str1 .length - str2 .length)]
    : [str1 + " " .repeat (str2 .length - str1 .length), str2]

export const printRes: (cards: [Card, Card][]) => string =
  cards =>
    cards .map (([day, night], i) => {
      const names = fillSpace (CardName [day .id]) (CardName [night .id])
      const mains = fillSpace (Gem [day .main]) (Gem [night .main])

      const index_str = (i + 1) .toString ()

      return `${index_str}.${" " .repeat (4 - index_str .length)}Tag:   ${names [0]} – ${mains [0]} – ${printDecorations (day .decorations)}\n     Nacht: ${names [1]} – ${mains [1]} – ${printDecorations (night .decorations)}\n`
    }) .join ("\n")
