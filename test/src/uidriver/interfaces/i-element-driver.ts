/* eslint-disable max-len */
import { WebElement } from 'selenium-webdriver'
import { IKey } from 'selenium-webdriver/lib/input'
import ILocatable from '../../html/interfaces/i-locatable'

export interface IElementDriver {
  findElement(element: ILocatable): Promise<WebElement>
  clearElement(element: ILocatable): Promise<void>
  sendKeysToElement(
    element: ILocatable,
    ...keysToSend: Array<string | number | Promise<string | number>>
  ): Promise<void>
  /**
   * Get the visible inner text of this element, including sub-elements, without any leading or trailing whitespace.
   * @param element
   */
  getText(element: ILocatable): Promise<string>
  isElementDisplayed(
    element: ILocatable,
    wait: boolean | number | undefined,
    scrollTo?: boolean
  ): Promise<boolean>
  /**
   * Simulates left click on element
   * @param element
   */
  clickOnElement(element: ILocatable): Promise<void>
  contextClickOnElement(element: ILocatable): Promise<void>
  clickOnElementWithKeyPressed(element: ILocatable, key: IKey): Promise<void>
  getAttributeValue(element: ILocatable, attribute: string): Promise<string>
  setAttributeValue(
    element: ILocatable,
    attribute: string,
    value: string
  ): Promise<void>
  getCssValue(element: ILocatable, css: string): Promise<string>
  /**
   * Get the full inner text of this element, including hidden text and text from sub-elements, without any leading or trailing whitespace.
   * @param element
   */
  getFullText(element: ILocatable): Promise<string>
  isElementEnabled(element: ILocatable): Promise<boolean>
  isElementSelected(element: ILocatable): Promise<boolean>
  scrollToElement(element: ILocatable): Promise<void>
  takeElementScreenshot(element: ILocatable): Promise<string>
  highlightElement(element: ILocatable): Promise<void>
  unHighlightElement(element: ILocatable): Promise<void>
  executeScript<T>(
    script: string,
    element: ILocatable | undefined,
    ...args: any[]
  ): Promise<WebElement>
  addElementDebugInfo(
    element: ILocatable,
    info: string,
    tooltip: string
  ): Promise<void>
  removeElementDebugInfo(element: ILocatable): Promise<void>
  clickWithDelay(element: ILocatable): Promise<void>
  isStale(element: ILocatable, shouldWait?: boolean): Promise<boolean>
}
