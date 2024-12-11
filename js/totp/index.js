import { authenticator } from 'otplib'; // 引入 otplib

// 设置 secret 和时间步
const secret = 'RX5N7QPUYI6BOT7UDQPN54AFSF2QQMJV';
const timeStep = 30;
const digits = 6;

// 使用 otplib 生成 TOTP
authenticator.options = { step: timeStep, digits: digits };
const otplibResult = authenticator.generate(secret); // otplib 生成的结果
console.log('otplib TOTP:', otplibResult);

//使用手动实现生成 TOTP
function generateTOTP(secret, timeStep = 30, digits = 6) {
  const base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const base32Decode = (input) => {
    const bytes = [];
    let buffer = 0,
      bits = 0;
    for (const char of input) {
      const value = base32Chars.indexOf(char.toUpperCase());
      if (value === -1) continue;
      buffer = (buffer << 5) | value;
      bits += 5;
      if (bits >= 8) {
        bytes.push((buffer >> (bits - 8)) & 255);
        bits -= 8;
      }
    }
    return new Uint8Array(bytes);
  };

  const decodedSecret = base32Decode(secret);
  const currentTime = Math.floor(Date.now() / 1000);
  const counter = Math.floor(currentTime / timeStep);

  const counterBuffer = new ArrayBuffer(8);
  const counterView = new DataView(counterBuffer);
  counterView.setUint32(4, counter, false);

  const hmac = sha1.hmac(decodedSecret, new Uint8Array(counterBuffer));
  const offset = hmac[hmac.length - 1] & 0x0f;
  const binaryCode =
    ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);

  return (binaryCode % 10 ** digits).toString().padStart(digits, '0');
}

//手动实现生成的结果
const manualResult = generateTOTP(secret, timeStep, digits);
console.log('手动实现 TOTP:', manualResult);

//比较结果
if (otplibResult === manualResult) {
  console.log('验证成功，手动实现与 otplib 结果一致！');
} else {
  console.error('验证失败，结果不一致！');
}
