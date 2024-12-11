package hk.burunduchan.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "posts")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(name = "content", nullable = true)
    val content: String?,

    @Column(name = "post_number", nullable = false)
    val postNumber: Int,

    @Column(name = "timestamp", nullable = false)
    val timestamp: LocalDateTime = LocalDateTime.now(),

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id", nullable = false)
    val board: Board,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "thread_id", nullable = false)
    val thread: Thread,

    @Column(name = "author", nullable = true)
    val author: String? = "Anon",

    @Column(name = "op", nullable = false)
    val op: Boolean? = false,

    @Column(name = "blob", nullable = true)
    val blob: String?,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reply_to")
    val replyTo: Post? = null
)

