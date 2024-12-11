package hk.burunduchan.service

import hk.burunduchan.dto.ThreadDto
import hk.burunduchan.model.Thread
import hk.burunduchan.repository.BoardRepository
import hk.burunduchan.repository.ThreadRepository
import org.springframework.stereotype.Service

@Service
class ThreadService(private val threadRepository: ThreadRepository,
                    private val boardRepository: BoardRepository) {

    fun getAllThreads(): MutableList<Thread> {
        return threadRepository.findAll()
    }

    fun createThread(
        id: Int,
        title: String,
        boardName: String,
        timestamp: String
    ): ThreadDto {
        val board =  boardRepository.findByName(boardName)
        val thread = Thread(
            id = id,
            title = title,
            board = board,
            timestamp = timestamp,
        )

        val savedThread = threadRepository.saveAndFlush(thread!!)

        return ThreadDto(
                id = savedThread.id,
                title = savedThread.title,
                board = savedThread.board.toString(),
                timestamp = savedThread.timestamp,
                blob = savedThread.blob,
            )
    }


    fun getThreadsByBoardName(boardName: String): List<Thread> {
        return threadRepository.findAllByBoardName(boardName)
    }


    fun getThreadByTitle(title: String) : List<Thread> {
        return threadRepository.findAllByBoardTitle(title)
    }
}
