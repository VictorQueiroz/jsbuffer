import { Suite } from 'sarg';
import Tokenizer from '../src/Tokenizer';
import path from 'path';
import fs from 'fs';
import ASTGenerator, { UnexpectedPunctuatorName } from '../src/ASTGenerator';
import assert from 'assert';

const suite = new Suite();
suite.test('ASTGenerator: it should tokenize files', async () => {
  new ASTGenerator(
    new Tokenizer({
      contents: await fs.promises.readFile(path.resolve(__dirname, 'schema')),
      textEncoder: new TextEncoder(),
      textDecoder: new TextDecoder(),
    })
      .tokenize()
      .tokens()
  ).generate();
  new ASTGenerator(
    new Tokenizer({
      contents: await fs.promises.readFile(path.resolve(__dirname, 'User')),
      textEncoder: new TextEncoder(),
      textDecoder: new TextDecoder(),
    })
      .tokenize()
      .tokens()
  ).generate();
});

suite.test(
  'ASTGenerator: it should handle errors in case of weird token types after import statement',
  () => {
    assert.strict.throws(() => {
      new ASTGenerator(
        new Tokenizer({
          contents: new TextEncoder().encode('import ;'),
          textEncoder: new TextEncoder(),
          textDecoder: new TextDecoder(),
        })
          .tokenize()
          .tokens()
      ).generate();
    });
  }
);
suite.test(
  'ASTGenerator: it should handle errors in case of weird token types export statement',
  () => {
    assert.strict.throws(() => {
      new ASTGenerator(
        new Tokenizer({
          contents: new TextEncoder().encode('export ;'),
          textEncoder: new TextEncoder(),
          textDecoder: new TextDecoder(),
        })
          .tokenize()
          .tokens()
      ).generate();
    });
  }
);

import { expect } from 'chai';

suite.test('ASTGenerator: it should throw UnexpectedPunctuatorName', () => {
  assert.strict.throws(() => {
    new ASTGenerator(
      new Tokenizer({
        contents: new TextEncoder().encode('trait x ;'),
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder(),
      })
        .tokenize()
        .tokens()
    ).generate();
  });
});

suite.test('ASTGenerator: it should throw UnexpectedKeywordName', () => {
  assert.strict.throws(() => {
    new ASTGenerator(
      new Tokenizer({
        contents: new TextEncoder().encode('export {'),
        textEncoder: new TextEncoder(),
        textDecoder: new TextDecoder(),
      })
        .tokenize()
        .tokens()
    ).generate();
  });
});

suite.test(
  'ASTGenerator##expectKeyword: it should call #expectKeyword after export',
  () => {
    assert.strict.throws(() => {
      new ASTGenerator(
        new Tokenizer({
          contents: new TextEncoder().encode('export 2;'),
          textEncoder: new TextEncoder(),
          textDecoder: new TextDecoder(),
        })
          .tokenize()
          .tokens()
      ).generate();
    });
  }
);

export default suite;
