module.exports ={
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
    
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ]
}