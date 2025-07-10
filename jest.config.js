/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',                     // Usa ts-jest para compilar TypeScript
  testEnvironment: 'node',               // Entorno backend
  rootDir: './src',                      // Para que busque tests y código en src
  testMatch: ['<rootDir>/test/**/*.test.ts'], // Busca tests en src/test con extensión .test.ts
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: '../coverage',      // Crea la carpeta coverage en la raíz
  collectCoverageFrom: [
    '**/*.{ts,js}',                      // Cubre todos los archivos ts y js dentro de src
    '!**/node_modules/**',
    '!**/test/**',                       // Excluye archivos de test del coverage
    '!**/config/**',                      // (opcional) excluye configs si no quieres cubrirlos
  ],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'], // archivo para setup global
};