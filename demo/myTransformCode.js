class myTransformCode {
  constructor() {
    this.packageNameheaderLen = 4
    this.serialNum = 0
    this.serialLen = 2
  }

  /**
   * @description  编码
   * @author 柳江
   * @date 06/03/2023
   * @param {*} data
   * @param {*} seralNum
   * @memberof myTransformCode
   */
  encode(data, seralNum) {
    const body = Buffer.from(data)

    // 开辟空间 作为
    const headerbuf = Buffer.alloc(this.packageNameheaderLen)
    headerbuf.writeInt16BE(seralNum || this.serialNum)
    headerbuf.writeInt16BE(body.length, this.serialLen)
    if (seralNum === undefined) {
      seralNum++
    }
    return Buffer.concat([headerbuf, body])
  }

  /**
   * @description 解码
   * @author 柳江
   * @date 06/03/2023
   * @param {*} buffer
   * @returns {*}
   * @memberof myTransformCode
   */
  decode(buffer) {
    const headerbuf = buffer.slice(0, this.packageNameheaderLen)
    const bodybuf = buffer.slice(this.packageNameheaderLen)
    return {
      seralNum: headerbuf.readInt16BE(),
      bodyLength: headerbuf.readInt16BE(this.serialLen),
      body: bodybuf.toString(),
    }
  }

  /**
   * @description 获取包的长度
   * @author 柳江
   * @date 06/03/2023
   * @memberof myTransformCode
   */
  getPackageLen(buffer) {
    if (buffer.length < this.packageNameheaderLen) {
      return 0
    } else {
      return this.packageNameheaderLen + buffer.readInt16BE(this.serialLen)
    }
  }
}

module.exports = myTransformCode
