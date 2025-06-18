package com.conexia.riesgos.util;

public final class StringUtilsCustom {

    private StringUtilsCustom() {
    }

    public static boolean isEmpty(String value) {
        return value == null || value.trim().isEmpty();
    }

    public static String formatLike(String value) {
        return isEmpty(value) ? null : "%" + value.trim().toUpperCase() + "%";
    }

    public static String formatUpper(String value) {
        return isEmpty(value) ? null : value.trim().toUpperCase();
    }
}

