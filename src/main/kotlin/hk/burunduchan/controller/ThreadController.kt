package hk.burunduchan.controller

import hk.burunduchan.dto.ThreadDto
import hk.burunduchan.model.Thread
import hk.burunduchan.repository.BoardRepository
import hk.burunduchan.service.ThreadService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/threads")
class ThreadController(
    private val threadService: ThreadService,
    private val boardRepository: BoardRepository
) {

    @GetMapping
    fun getAllThreads(): ResponseEntity<List<ThreadDto>> {
        val threads = threadService.getAllThreads()
        return ResponseEntity.ok(threads)
    }

    @GetMapping("/{boardName}/threads")
    fun getThreadsByBoardId(@PathVariable boardName: String): ResponseEntity<List<Thread>> {
        val thread = threadService.getThreadsByBoardId(boardName)
        return ResponseEntity.ok(thread)
    }

    @GetMapping("/{title}/threads")
    fun getThreadByTitle(@PathVariable title: String) : ResponseEntity<List<Thread>> {
        val thread = threadService.getThreadByTitle(title)
        return ResponseEntity.ok(thread)
    }

    @PostMapping
    fun createThread(
        @RequestParam boardName: String,
        @RequestParam title: String): ResponseEntity<ThreadDto> {
        val board = boardRepository.findById(boardName)
            .orElseThrow { IllegalArgumentException("Board with id $boardName not found") }
        val newThread = threadService.createThread(title, board)
        return ResponseEntity.ok(newThread)
    }
}
