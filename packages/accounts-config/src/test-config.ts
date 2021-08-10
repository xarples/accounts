import { SignJWT } from 'jose/jwt/sign'
import { jwtVerify } from 'jose/jwt/verify'
import { createRemoteJWKSet } from 'jose/jwks/remote'
import { parseJwk } from 'jose/jwk/parse'

async function main() {
  try {
    var pem = `-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAyYbye11eg5fDQxez3kiH2GTVhu5H14Ml1gH6bug6hPamzhDt\nWcm59bq2KYyjldPdZOk89kYBh4kr9wLjlTadgDU5VSgEYpd9B6b9EvA5RGE9M4Wz\nsmNadOqx6+pMLPJF1FdPuGo+TH2QmcV/tJlGlzjRjZ94TxHb7JbNM/jyBcQI+Dh7\nII1cjWYm9Sjr6+sicjkVZYYbeyuL3YdE/RTZnBj2vM1HBps7UxLQS0H8Z/3ImzUo\nD+KrR65bU/93pBbndifoy4ldwzcbSM/KofYc0ScV/Tg6oRZyRPs23waoje9gHivM\nMzGblu1tZ9mYCjGA4qg3MAtQP9N/ubqi2w+QUwIDAQABAoIBADorhrCPSenIE6e5\nHsUpwHR43p2dCAWwKGq2lXgP9lxM6ecPQcOqE9BXPZ+OpeVoiz5GiL85g9WAhb0+\nCz0Vz66jLlJjQ6jFu2RLEj+2MYGIY+cMT8tNHF4lJIhJUAWlRPy+2xcLK8JeeC+6\nr1sM5zBdSTeM8Wg5anbHLKI02H9LDGFFk86ZedSmXxhlUwTD+lsYc6BqHScFX8f7\nT+ru+K7/mZFUBS0Nnc2jMxlO7taq9vy0054IEJaJUCce5iW6t2zt/UTtJwQx/oSa\nHRPRzStT4b3W/cRobc5oFk7xmHcGY3TqcdnOkCsxP1rM84rKzqbe0ZtEb4HGCJlA\nGrRGLdkCgYEA7Pql1YASLsXfyyPKRtOCWaHwJXs41FHrDeMtiT9e6snTj2Anjtie\nz0f74R3UxO+9zP8IPvDWmNB7GGOdKvn1xlLk9lKEHn8xQ8UocKXFxhrLjrqFwtl5\nymyAZjCnxKmXBoRiJ8eAb3XZGtlNDliycrbgIghSO4vjOXImRTtBpYcCgYEA2bPY\nwmUtNeW6MVdu+S/cmLQZQ86QKbZBr4e9bk2UUpXpNe10MjQzTKu8yEb9WkEiLL0T\ngVOc5EwPGyWNvHNWQdMBoppw2OKnd81fMu4rpJr64EvuHL06yJVtGMUbaP4BWsmZ\nst7L5mXjVwIrSVktMH6cBuPzO//Svaz4qG2uMdUCgYAiKPNUtlRop59d4ffbg8ur\nbft2+68yc+iFJPVAboEZKSS06zBol/M0f/Tf+3PbO4/JiA3BPOhCOPM1jc5vDn8O\nKo7Urwpadw077qSosEy1BNHI7jwv3TeAJWnQ0TytzaB2kQixIUHzTzKPezlvUvvO\nK2xdm4N3D/AeLMU1f5gz6wKBgQClG6lBhcqMHfbghRc9FfeQOMcQjhD4Eaovnhsl\nFOFw4RFGPRjrGnvtojJDEtQDJ3Lry1qHswpCewzZ4dllG3RH5+hNkiQT2ZJ5YeDZ\nl5ix9nhetDeaxElY5zselh77uej9Gfjfl+m8i3mn+5Uow+Fp7hwXfbpzvsnt4MmV\ns9lxIQKBgQCc/PeKo0UpMDcqNmSaI0QSP2lyDdTC7mgl8cxfumPgsbrmNHYs1Zh0\nnJtEsvUuDQYB5udSNUwS6RPN+9AjKGAoXbtIiBAe7rG3WGX57N4ppcLi1MlqTjnW\nCsumfTYuvAvErsesVUnWO+vUYzTiV8OU52osB3FyxwDSCC5QCZWRpQ==\n-----END RSA PRIVATE KEY-----\n`.trim()

    const privateJWK = {
      kty: 'RSA',
      n:
        '75aXigBIZ9P329Fad4YglRVgd6_nXDislj6j-pcAfqIagqRKGGIe6rxFaQ2uHdqV5LpOgp3kXWgGzDaFiQv1sUhxXKZlSry_CBZwXh6fSXRbSrN_IDuwTBU-caL91dxb2bnns-C3k5o5yqCm6ApIY81h23jE88UHVFchqVr3aOaBQQblrzXHI4M-XjyQfSFUJR6rrQ9NA1KGTtRAwaIHOQvEA4wzF6CwhJf7VRD1Vbe6WlkEhFaTSlQxvsMXlyW3Fp3eSkXlUei_GodWVv8nq8YscoHIaNnM9xIBkFrq_F8emIiZn-SkUj5QyvSuEE2JtZ3ycvryUm-vVR8JVDj-Ww',
      e: 'AQAB',
      d:
        'GyP0Bq4BhcF9Umlk1iVbi4fgZa6HhurkoiB2cuyoIbA7UJFL03dKCU1Kj5v9HWSllkOEoUdBl1MxcfC7L8srCeoq7VPsJYs8GK5yDDdr0-ZacRvkSsJ4NiYx7K2KE6_it8dXeAj8wru10D5iqeaATM33R-VmajbnnaZBKe4kGL3LxEM8vY1m4b_dsFvAwM77tl6Zffof5YtLI2W1gxggDufNA7o6WF7iZcxNEgMc9_oXcDYPkgjlMVO7rLlOI00OHxS5AEdfdIW86qBV00YbKFAr3GVsoTDc9zGBRHhkVDBG150ryawaRnCK0X95foIR40XPefck_cLME_PB9IrQAQ',
      p:
        '_wAvVbCg1uBdvc9yA6upvOnwFS1q6ZU8AzE4ifpc6KrRkDD8N9mmr1122_HQ3rd4-vUMAnR54CyCHgJygSlGW1O6CmqPI8rSx2jKpaFG-SUpeClTJpfOiy4AHNqpfWSteBYRXK-_x4srnmfDpLWShbWl1fP1KYtqnbh_4kmE9EM',
      q:
        '8IbyArnReau9zCLhIeb-VNb23lc9102zuuKLaCFIUizaV9a5-pnL1w9zOwg1pAdhhsO7XEP75hMHsp3MWdtHldNX9nXFHCboH_UkZhpGB2htqevlfkczC3BLiF2ix6Q5i8E5U9_fNYR-PVoCUAtvam-0J4nUKkNw3hGXxsFveAk',
      dp:
        'dCELbYTQ2sq3JjgQ_mbxGB2Zvqs-Yz4ZZILH8t5X7YXNhlMoqe6vIHH6LVRFAQihSfjLDVsqHdNnNm964iN_7RuGQDQjF_PIZhPtJdz6y4AHELgRLCQ6Zdv_JSTXx0lQTr4ODh3jwuY4aR1sVdhy7_23lmZRoifh2A4r_0voBq0',
      dq:
        'Cr_tNwP5AbgUPnhcmXhKa55D4EID6Ih3fOW9F0VNhyasB3r4SuPuwUjWfI_sXc1apXw_9mqvamP1Vx1IUcfEFkUgzEoNKinu--an3sxTzuby58I8On2SIXO-XHTa3pNPYxiaqE38Gtc2ESXhrpQkQZyGb7HwQodLFxGwN9jTU4k',
      qi:
        'k5vH3nSPptpRmbTAsJrsInSF7vcaiE_Pcef58s5Fd_f2OzK9wdbBTX7s-GVlOAQwGFIdjICIl-3TSeUwLl0oOu_vxGTk04kto-xJwTXuCUiZSwAjrzkAGdczgit-SrbbYSRJJpXLuuDQhQLBn8m8S9UwF_lSBuOpJ4pKy5vsakY',
      alg: 'RS256',
      use: 'sig'
    }

    const JWKS = createRemoteJWKSet(new URL('http://localhost:5000/jwks'))
    const signKey = await parseJwk(privateJWK)

    console.log(signKey)

    const token = await new SignJWT({ 'urn:example:claim': true })
      .setProtectedHeader({ alg: 'RS256' })
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
      .sign(signKey)

    console.log(token)

    const result = await jwtVerify(token, JWKS)

    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

main()
