package hk.burunduchan.service

import hk.burunduchan.dto.ThreadDto
import hk.burunduchan.model.Board
import hk.burunduchan.model.Thread
import hk.burunduchan.repository.ThreadRepository
import org.springframework.stereotype.Service

@Service
class ThreadService(private val threadRepository: ThreadRepository) {

    fun getAllThreads(): List<ThreadDto> {
        return threadRepository.findAll().map {
            ThreadDto(
                id = it.id,
                title = it.title,
                boardId = it.boardId.id ?: throw IllegalStateException("Board ID cannot be null"),
                blob = it.blob,
                timestamp = it.timestamp
            )
        }
    }

    fun createThread(title: String, board: Board): ThreadDto {
        val thread = Thread(title = title, boardId = board)
        val savedThread = threadRepository.save(thread)
        return ThreadDto(
            id = savedThread.id,
            title = savedThread.title,
            boardId = savedThread.boardId.id ?: throw IllegalStateException("Board ID cannot be null"),
            blob = savedThread.blob,
            timestamp = savedThread.timestamp
        )
    }

    fun getThreadsByBoardId(boardId: Int?): List<Thread> {
        return threadRepository.findAllByBoardId(
            boardId ?: throw IllegalArgumentException("Board ID cannot be null")
        )
    }


    fun getThreadByTitle(title: String) : List<Thread> {
        return threadRepository.findAllByBoardTitle(title)
    }
}
