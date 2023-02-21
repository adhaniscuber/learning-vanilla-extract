import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";
import { tokens } from "./tokens";
import { tokens as themesss } from "./tokens/index";


const getVarName = (_value: string | null, path: string[]) =>
  path.join('-').replace('.', '_').replace('/', '__');

export const theme = createGlobalThemeContract(tokens, getVarName);

createGlobalTheme(':root', theme, tokens);


// // Base theme
// export const vars = createGlobalThemeContract(themesss, getVarName);
// createGlobalTheme(':root-vds', vars, themesss);

export default theme;
