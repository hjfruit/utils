import { expect, it, describe } from 'vitest'

import {
  isArray,
  isDef,
  isType,
  isObject,
  isFunction,
  isPromise,
  isMobile,
  isLicensePlateNumber,
} from './is'

describe('is', () => {
  it('isType', () => {
    const isNumber = isType('Number')
    expect(isNumber(1.25)).toEqual(true)
    expect(isDef(null)).toEqual(false)
    expect(isDef(undefined)).toEqual(false)
    expect(isDef('')).toEqual(true)
    expect(isDef(0)).toEqual(true)
    expect(isArray([])).toEqual(true)
    expect(isArray('[array]' as any)).toEqual(false)
    expect(isObject(null)).toEqual(false)
    expect(isObject({})).toEqual(true)
    expect(isObject('{name: "limoer"}')).toEqual(false)
    const noop = () => {}
    expect(isFunction(noop)).toEqual(true)
    const promise = new Promise(() => {})
    expect(isPromise(promise)).toEqual(true)
    const func = () => {}
    func.then = () => {}
    func.catch = () => {}
    expect(isPromise(func)).toEqual(true)
  })
  it('isMobile', () => {
    expect(isMobile('13212345678')).toEqual(true)
    expect(isMobile('+8613212345678')).toEqual(true)
    expect(isMobile('861321234567')).toEqual(false)
  })
  it('isLicensePlateNumber', () => {
    expect(isLicensePlateNumber('渝A50A52')).toEqual(true)
    expect(isMobile('渝A 50A52')).toEqual(false)
    expect(isMobile('渝A5OA52')).toEqual(false)
    expect(isMobile('渝A50I52')).toEqual(false)
  })
})