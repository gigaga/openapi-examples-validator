const path = require('path'),
    { loadTestData } = require('../../../util/setup-tests'),
    { 'default': validateExamples, validateFile } = require('../../../../src/index');

const REL_PATH__SIMPLE = 'v3/simple-api-with-examples',
    REL_PATH__WITH_INTERNAL_REFS = 'v3/simple-api-with-examples-with-refs',
    REL_PATH__INVALID__WITH_INTERNAL_REFS = 'v3/simple-api-with-examples-with-refs-invalid',
    FILE_PATH__INVALID__YAML = path.join(__dirname, '../../../data/v3/simple-api-with-examples-with-refs-invalid.yaml'),
    FILE_PATH__INVALID__YML = path.join(__dirname, '../../../data/v3/simple-api-with-examples-with-refs-invalid.yml'),
    FILE_PATH__VALID__YAML = path.join(__dirname, '../../../data/v3/simple-api-with-examples-with-refs.yaml'),
    FILE_PATH__VALID__YML = path.join(__dirname, '../../../data/v3/simple-api-with-examples-with-refs.yml');

describe('Main-module, for v3 should', function() {
    describe('recognize', function() {
        it('valid single example', function() {
            validateExamples(loadTestData(REL_PATH__SIMPLE)).valid.should.equal(true);
        });
        it('example with internal refs', function() {
            validateExamples(loadTestData(REL_PATH__WITH_INTERNAL_REFS)).valid.should.equal(true);
        });
        it('invalid example with internal refs', function() {
            validateExamples(loadTestData(REL_PATH__INVALID__WITH_INTERNAL_REFS)).valid.should.equal(false);
        });
    });
    describe('be able to load and validate YAML-specs', function() {
        describe('containing valid examples', function() {
            it('`with .yaml` extension', function() {
                validateFile(FILE_PATH__VALID__YAML).valid.should.equal(true);
            });
            it('`with .yml` extension', function() {
                validateFile(FILE_PATH__VALID__YML).valid.should.equal(true);
            });
        });
        describe('containing invalid examples', function() {
            it('`with .yaml` extension', function() {
                validateFile(FILE_PATH__INVALID__YAML).valid.should.equal(false);
            });
            it('`with .yml` extension', function() {
                validateFile(FILE_PATH__INVALID__YML).valid.should.equal(false);
            });
        });
    });
});