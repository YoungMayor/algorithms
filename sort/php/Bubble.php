<?php

$list = [3, 1, 6, 7, 5, 4, 9, 2];

function bubbleSort(array $list)
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
            return bubbleSort($list);
        }
    }
    return $list;
}

print_r(bubbleSort($list));
