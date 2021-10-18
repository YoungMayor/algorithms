<?php

namespace Youngmayor\Algorithm;

require "vendor/autoload.php";

use Youngmayor\Algorithm\Sort;

class SortTest
{
    public $list = [3, 1, 6, 7, 5, 4, 9, 2];

    public $methods = [
        'bubbleSortRecursive'
    ];

    public function __construct()
    {
        foreach ($this->methods as $algorithm) {
            $result = Sort::$algorithm($this->list);

            echo "The result from {$algorithm} is: " .  implode(', ', $result);
        }
    }
}

new SortTest();
