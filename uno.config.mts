// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  presetAttributify,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetAttributify(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
