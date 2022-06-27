<?php

$finder = PhpCsFixer\Finder::create()
    ->notPath('bootstrap/cache')
    ->notPath('storage')
    ->notPath('vendor')
    ->notPath('spark')
    ->notPath('bin')
    ->in(__DIR__)
    ->name('*.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new PhpCsFixer\Config())->setRules([
    '@PSR12' => true,
    'array_syntax' => ['syntax' => 'short'],
    'binary_operator_spaces' => ['operators' => ['=' => 'single_space']],
    'concat_space' => ['spacing' => 'one'],
    'no_unused_imports' => true,
    'no_whitespace_before_comma_in_array' => true,
    'trailing_comma_in_multiline' => ['elements' => ['arrays']],
    'whitespace_after_comma_in_array' => true,
])
    ->setFinder($finder)
    ->setUsingCache(true);
