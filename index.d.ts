export interface EventInterface {
  keyCode: number;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  preventDefault: () => void;
}

export interface ElementInterface {
  attachEvent(event: string, listener: EventListener): boolean;

  detachEvent(event: string, listener: EventListener): void;

  addEventListener(event: string, listener: EventListener, useCapture?: boolean): void;

  removeEventListener(event: string, listener: EventListener, useCapture?: boolean): void;

  scrollTop: number;
  classList?: DOMTokenList,
  parentNode?: Node & ParentNode | null;
  id?: string
}

export interface Style {
  [x: string]: any
}

interface AddMouseWheelEventListenerElement {
  attachEvent?(event: string, listener: EventListener): boolean;

  addEventListener(event: string, listener: EventListener, useCapture?: boolean): void;
}

interface IsElementInMainElement extends Element {
  parentNode: (Node & ParentNode) | null;
  classList: DOMTokenList,
}

interface RemoveMouseWheelEventListenerElement extends Element {
  detachEvent?(event: string, listener: EventListener): void;
}

export interface ObjectInterface extends Object{
  [x: string]: any
}
