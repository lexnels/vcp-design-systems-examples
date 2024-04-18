"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Button,
  Checkbox,
  FormHelperText,
  FormLabel,
  InputAdornment,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "./mui-components";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<ButtonClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableElevation",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "endIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "startIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["contained", "outlined", "text"],
    },
  ],
});

Builder.registerComponent(withChildren(Select), {
  name: "Select",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "autoWidth",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Root?: ElementType<any, keyof IntrinsicElements>; Input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides; input?: InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides; }",
      },
    },
    {
      name: "defaultOpen",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableInjectingGlobalStyles",
      type: "boolean",
    },
    {
      name: "disableUnderline",
      type: "boolean",
    },
    {
      name: "displayEmpty",
      type: "boolean",
    },
    {
      name: "endAdornment",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "IconComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "input",
      type: "string",
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "inputComponent",
      type: "string",
      meta: {
        ts: "ElementType<InputBaseComponentProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "labelId",
      type: "string",
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "MenuProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuProps>",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "multiple",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "native",
      type: "boolean",
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "renderSuffix",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "renderValue",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "SelectDisplayProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "HTMLAttributes<HTMLDivElement>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides & { sx?: SxProps<Theme>; }; input?: InputHTMLAttributes<...> & ... 1 more ... & { ...; }; }",
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ root?: ElementType<any, keyof IntrinsicElements>; input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "startAdornment",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
    },
    {
      name: "value",
      type: "string",
      enum: [""],
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled"],
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(FormLabel), {
  name: "FormLabel",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormLabelClasses>",
      },
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "filled",
      type: "boolean",
    },
    {
      name: "focused",
      type: "boolean",
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Typography), {
  name: "Typography",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["center", "inherit", "justify", "left", "right"],
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TypographyClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "gutterBottom",
      type: "boolean",
    },
    {
      name: "noWrap",
      type: "boolean",
    },
    {
      name: "paragraph",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
    },
    {
      name: "variantMapping",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: 'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>',
      },
    },
  ],
});

Builder.registerComponent(withChildren(MenuItem), {
  name: "MenuItem",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuItemClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "dense",
      type: "boolean",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableGutters",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "divider",
      type: "boolean",
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "selected",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Menu), {
  name: "Menu",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<PopoverActions>",
      },
    },
    {
      name: "anchorEl",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)",
      },
    },
    {
      name: "anchorOrigin",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverOrigin",
      },
    },
    {
      name: "anchorPosition",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverPosition",
      },
    },
    {
      name: "anchorReference",
      type: "string",
      enum: ["anchorEl", "anchorPosition", "none"],
    },
    {
      name: "BackdropComponent",
      type: "string",
      meta: {
        ts: "ElementType<BackdropProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "BackdropProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<BackdropProps>",
      },
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "closeAfterTransition",
      type: "boolean",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Root?: ElementType<any, keyof IntrinsicElements>; Backdrop?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '{ root?: SlotComponentProps<"div", ModalComponentsPropsOverrides, ModalOwnerState>; backdrop?: SlotComponentProps<OverridableComponent<BackdropTypeMap<{}, "div">>, ModalComponentsPropsOverrides, ModalOwnerState>; }',
      },
    },
    {
      name: "container",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Element | (() => Element)",
      },
    },
    {
      name: "disableAutoFocus",
      type: "boolean",
    },
    {
      name: "disableAutoFocusItem",
      type: "boolean",
    },
    {
      name: "disableEnforceFocus",
      type: "boolean",
    },
    {
      name: "disableEscapeKeyDown",
      type: "boolean",
    },
    {
      name: "disablePortal",
      type: "boolean",
    },
    {
      name: "disableRestoreFocus",
      type: "boolean",
    },
    {
      name: "disableScrollLock",
      type: "boolean",
    },
    {
      name: "elevation",
      type: "number",
    },
    {
      name: "hideBackdrop",
      type: "boolean",
    },
    {
      name: "keepMounted",
      type: "boolean",
    },
    {
      name: "marginThreshold",
      type: "number",
    },
    {
      name: "MenuListProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuListProps>",
      },
    },
    {
      name: "open",
      type: "boolean",
      required: true,
    },
    {
      name: "PaperProps",
      type: "string",
      meta: {
        ts: "Partial<PaperProps<ElementType<any, keyof IntrinsicElements>>>",
      },
    },
    {
      name: "PopoverClasses",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<PopoverClasses>",
      },
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '{ root?: SlotComponentProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotComponentProps<...>; }',
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ root?: ElementType<any, keyof IntrinsicElements>; paper?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "transformOrigin",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverOrigin",
      },
    },
    {
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      enum: ["auto"],
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["menu", "selectedMenu"],
    },
  ],
});

Builder.registerComponent(withChildren(TextField), {
  name: "TextField",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TextFieldClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "focused",
      type: "boolean",
    },
    {
      name: "FormHelperTextProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormHelperTextProps>",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "helperText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "hiddenLabel",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "InputLabelProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputLabelProps>",
      },
    },
    {
      name: "InputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FilledInputProps>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none", "normal"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "select",
      type: "boolean",
    },
    {
      name: "SelectProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectProps>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
      meta: {
        ts: "HTMLInputTypeAttribute",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled"],
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(FormHelperText), {
  name: "FormHelperText",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormHelperTextClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "filled",
      type: "boolean",
    },
    {
      name: "focused",
      type: "boolean",
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense"],
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled", "outlined", "standard"],
    },
  ],
});

Builder.registerComponent(withChildren(Checkbox), {
  name: "Checkbox",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "checked",
      type: "boolean",
    },
    {
      name: "checkedIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CheckboxClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "default",
        "error",
        "info",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "edge",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "icon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "indeterminate",
      type: "boolean",
    },
    {
      name: "indeterminateIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputHTMLAttributes<HTMLInputElement>",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<HTMLInputElement>",
      },
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});

Builder.registerComponent(withChildren(InputAdornment), {
  name: "InputAdornment",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputAdornmentClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disablePointerEvents",
      type: "boolean",
    },
    {
      name: "disableTypography",
      type: "boolean",
    },
    {
      name: "position",
      type: "string",
      enum: ["end", "start"],
      required: true,
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled", "outlined", "standard"],
    },
  ],
});
