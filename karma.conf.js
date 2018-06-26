// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-mocha-reporter'),
      // 'karma-phantomjs-launcher',
      // 'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: path.join(__dirname, 'coverage_report'),
      reports: ['html', 'lcovonly', 'cobertura'],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'junit', 'coverage-istanbul'],

    // reporters: ['progress', 'junit','coverage'],
    preprocessors: {
      // 'src/**/*.js': ['coverage']
      'src/**/*.js': ['coverage']
    },
    // coverageReporter: {
    //   // specify a common output directory
    //   dir: 'build/reports/coverage',
    //   reporters: [
    //     // reporters not supporting the `file` property
    //     { type: 'html', subdir: 'report-html' },
    //     { type: 'lcov', subdir: 'report-lcov' },
    //     // reporters supporting the `file` property, use `subdir` to directly
    //     // output them in the `dir` directory
    //     { type: 'cobertura', subdir: '.', file: 'cobertura.xml' },
    //     // { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
    //     // { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
    //     // { type: 'text', subdir: '.', file: 'text.txt' },
    //     // { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
    //   ]
    // },
    // the default configuration
    junitReporter: {
      outputDir: 'junit_test', // results will be saved as $outputDir/$browserName.xml
      outputFile: "unit_test_result.xml", // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
      xmlVersion: null // use '1' if reporting to be per SonarQube 6.2 XML format
    },
    // reporters: ['mocha', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,

    // singleRun: false
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['ChromeTravisCi'];
  }

  config.set(configuration);
};
