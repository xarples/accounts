export function verifyScopes(tokenScopes: string[], scopes: string[]) {
  return scopes.every(scope => tokenScopes.includes(scope))
}
