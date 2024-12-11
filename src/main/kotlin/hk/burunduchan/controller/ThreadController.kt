package hk.burunduchan.controller

import hk.burunduchan.dto.ThreadDto
import hk.burunduchan.model.Thread
import hk.burunduchan.repository.BoardRepository
import hk.burunduchan.service.ThreadService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class ThreadController(
    private val threadService: ThreadService,
    private val boardRepository: BoardRepository
) {

    @GetMapping("/threads")
    fun getAllThreads(): ResponseEntity<MutableList<Thread>> {
        val threads = threadService.getAllThreads()
        return ResponseEntity.ok(threads)
    }

    @GetMapping("/{boardName}/threads")
    fun getThreadsByBoardName(@PathVariable boardName: String): ResponseEntity<List<Thread>> {
        val thread = threadService.getThreadsByBoardName(boardName)
        return ResponseEntity.ok(thread)
    }

    @GetMapping("/{title}/thread")
    fun getThreadByTitle(@PathVariable title: String) : ResponseEntity<List<Thread>> {
        val thread = threadService.getThreadByTitle(title)
        return ResponseEntity.ok(thread)
    }

    @PostMapping("threads")
    fun createThread(
        @RequestParam threadDto: ThreadDto): ResponseEntity<ThreadDto> {
        val newThread = threadService.createThread(
            threadDto.id,
            threadDto.title,
            threadDto.board,
            threadDto.timestamp
        )
        return ResponseEntity.ok(newThread)
    }
}
