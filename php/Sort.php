<?php

namespace Youngmayor\Algorithm;

class Sort
{
    public static function bubbleSortRecursive(array $list)
    {
        for ($i = 0; $i < count($list); $i++) {
            if ($i + 1 >= count($list)) {
                continue;
            }

            $current = $list[$i];
            $next = $list[$i + 1];

            if ($current > $next) {
                $list[$i] = $next;
                $list[$i + 1] = $current;
                return self::bubbleSortRecursive($list);
            }
        }
        return $list;
    }
}
