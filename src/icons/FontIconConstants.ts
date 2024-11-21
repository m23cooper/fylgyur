import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons/faAnglesRight';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons/faArrowAltCircleRight';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowsSpin } from '@fortawesome/free-solid-svg-icons/faArrowsSpin';
import { faAt } from '@fortawesome/free-solid-svg-icons/faAt';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import { faBugSlash } from '@fortawesome/free-solid-svg-icons/faBugSlash';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons/faChalkboardUser';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons/faClipboardCheck';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons/faClipboardList';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons/faFileArrowDown';
import { faFileExport } from '@fortawesome/free-solid-svg-icons/faFileExport';
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons/faFileUpload';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons/faHeartCirclePlus';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons/faScrewdriverWrench';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons/faSignInAlt';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';
import { faUserPen } from '@fortawesome/free-solid-svg-icons/faUserPen';
import { library } from '@fortawesome/fontawesome-svg-core';

export const FontIconSize = {
  XS: 'fa-xs',
  SM: 'fa-sm',
  LG: 'fa-lg',
  XL: 'fa-xl',
  TWO_X: 'fa-2x',
  THREE_X: 'fa-3x',
  FOUR_X: 'fa-5x',
  FIVE_X: 'fa-5x',
  SIX_X: 'fa-6x',
  SEVEN_X: 'fa-7x',
  EIGHT_X: 'fa-8x',
  NINE_X: 'fa-9x',
  TEN_X: 'fa-10x',
};

export const FontIconRotate = {
  NONE: '',
  NINETY: 'fa-rotate-90',
  ONE_EIGHTY: 'fa-rotate-180',
  TWO_SEVENTY: 'fa-rotate-270',
};

export const FontIconFlip = {
  NONE: '',
  HORIZONTAL: 'fa-flip-horizontal',
  VERTICAL: 'fa-flip-vertical',
};

export const FontIconAnimate = {
  NONE: '',
  SPIN: 'fa-spin',
  PULSE: 'fa-pulse',
};

export const FontIconFixedWidth = {
  NONE: '',
  FIXED: 'fa-fw',
};

export function iconToString({ prefix = 'fas', iconName }): string {
  switch (prefix) {
    case 'fas': {
      prefix = 'fa-solid';
      break;
    }
    case 'far': {
      prefix = 'fa-regular';
      break;
    }
  }
  return `${prefix} fa-${iconName}`;
}

export const FontIconType = {
  ADD: iconToString(faPlusCircle),
  REPORT: iconToString(faClipboardList),
  ANGLES_RIGHT: iconToString(faAnglesRight),
  APPLICATION_EDIT: iconToString(faUserPen),
  ARROW_RIGHT: iconToString(faArrowRight),
  AT: iconToString(faAt),
  BARS: iconToString(faSquare),
  BUG: iconToString(faBug),
  BUG_DEAD: iconToString(faBugSlash),
  CHALKBOARD_USER: iconToString(faChalkboardUser),
  CHECK_CIRCLE: iconToString(faCheckCircle),
  CLOSE: iconToString(faClose),
  COPY: iconToString(faCopy),
  DEV: iconToString(faScrewdriverWrench),
  DOWNLOAD: iconToString(faFileArrowDown),
  EDIT: iconToString(faEdit),
  EXCEL: iconToString(faClipboardCheck),
  EXPORT: iconToString(faFileExport),
  FILE_IMAGE: iconToString(faFileImage),
  FILE_PDF: iconToString(faFilePdf),
  FILE_UPLOAD: iconToString(faFileUpload),
  FINDER: iconToString(faFingerprint),
  HEART: iconToString(faHeart),
  HEART_ADD: iconToString(faHeartCirclePlus),
  HOME: iconToString(faHome),
  LESS: iconToString(faAngleLeft),
  LOCK: iconToString(faLock),
  LOGIN: iconToString(faArrowAltCircleRight),
  ML_OPS: iconToString(faRobot),
  MORE: iconToString(faAngleRight),
  SEARCH: iconToString(faMagnifyingGlass),
  SIGN_IN: iconToString(faSignInAlt),
  LOGOUT: iconToString(faSignOutAlt),
  SPINNER: iconToString(faArrowsSpin),
  TABLE: iconToString(faTable),
  WARNING: iconToString(faExclamationTriangle),
  VIEW: iconToString(faEye),
};

class FontIconLibrary {
  constructor() {
    library.add(faAngleLeft);
    library.add(faAngleRight);
    library.add(faAnglesRight);
    library.add(faArrowAltCircleRight);
    library.add(faArrowRight);
    library.add(faArrowsSpin);
    library.add(faAt);
    library.add(faBug);
    library.add(faBugSlash);
    library.add(faChalkboardUser);
    library.add(faCheckCircle);
    library.add(faClipboardCheck);
    library.add(faClipboardList);
    library.add(faClose);
    library.add(faCopy);
    library.add(faEdit);
    library.add(faExclamationTriangle);
    library.add(faEye);
    library.add(faFileArrowDown);
    library.add(faFileExport);
    library.add(faFileImage);
    library.add(faFilePdf);
    library.add(faFileUpload);
    library.add(faFingerprint);
    library.add(faHome);
    library.add(faHeart);
    library.add(faHeartCirclePlus);
    library.add(faLock);
    library.add(faMagnifyingGlass);
    library.add(faPlusCircle);
    library.add(faRobot);
    library.add(faScrewdriverWrench);
    library.add(faSignInAlt);
    library.add(faSignOutAlt);
    library.add(faSquare);
    library.add(faTable);
    library.add(faUserPen);
  }
}

export const fontIconLibrary = new FontIconLibrary();
