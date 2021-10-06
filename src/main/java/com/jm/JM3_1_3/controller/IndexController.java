package com.jm.JM3_1_3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/")
public class IndexController {

    @GetMapping
    public String getIndex() {
        return "index";
    }
}


