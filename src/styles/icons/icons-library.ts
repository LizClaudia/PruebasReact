import { GoAiguaIconType } from "@goaigua/goaigua-styles/icons/icon.types";

import { FontAwesomeIconsLibrary } from "@goaigua/goaigua-styles/icons/libraries/font-awesome/fontawesome-icons-library";
import { UxIconsLibrary } from "@goaigua/goaigua-styles/icons/libraries/ux/ux-icons-library";

export type { GoAiguaIconType as IconNameType };

export const IconName = {
    ...UxIconsLibrary,
    ...FontAwesomeIconsLibrary,
};
