package hk.burunduchan.controller

import hk.burunduchan.model.Board

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicInteger

@RestController
@RequestMapping("api")
class BoardController {
    private val counter = AtomicInteger()

    @GetMapping("boards")
    fun getBoards() =
        listOf(
            Board(1, "/b "),
            Board(2, "/a "),
            Board(3, "/n "),
            Board(4, "/s ")
        )
}