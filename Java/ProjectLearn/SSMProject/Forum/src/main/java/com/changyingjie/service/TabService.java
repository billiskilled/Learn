package com.changyingjie.service;

import com.changyingjie.domain.Tab;

import java.util.List;

public interface TabService {
    List<Tab> getAllTabs();

    Tab getByTabNameEn(String tabName);
}
