'use strict'

import { InterchangeSerdeOpt } from './InterchangeSerdeOpt'

export class BaselineNotation {
  constructor (header?: string[], options?: InterchangeSerdeOpt) {
    this.header = header === undefined ? new Array<string>() : header
    this.options = options === undefined ? {} : options
    this.functionalGroups = new Array<BaselineFunctionalGroup>()
  }

  options?: InterchangeSerdeOpt
  header: string[]
  functionalGroups: BaselineFunctionalGroup[]

  addFunctionalGroup (header: string[]): BaselineFunctionalGroup {
    const functionalGroup = new BaselineFunctionalGroup(header)

    this.functionalGroups.push(functionalGroup)

    return functionalGroup
  }
}

export class BaselineFunctionalGroup {
  constructor (header?: string[]) {
    this.header = header === undefined ? new Array<string>() : header
    this.transactions = new Array<BaselineTransaction>()
  }

  header: string[]
  transactions: BaselineTransaction[]

  addTransaction (header: string[]): BaselineTransaction {
    const transaction = new BaselineTransaction(header)

    this.transactions.push(transaction)

    return transaction
  }
}

export class BaselineTransaction {
  constructor (header?: string[]) {
    this.header = header === undefined ? new Array<string>() : header
    this.segments = new Array<BaselineSegment>()
  }

  header: string[]
  segments: BaselineSegment[]

  addSegment (tag: string, elements: string[]): BaselineSegment {
    const segment = new BaselineSegment(tag, elements)

    this.segments.push(segment)

    return segment
  }
}

export class BaselineSegment {
  constructor (tag: string, elements: string[]) {
    this.tag = tag
    this.elements = elements
  }

  tag: string
  elements: string[]
}