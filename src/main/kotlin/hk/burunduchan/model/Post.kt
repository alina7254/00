package hk.burunduchan.model

import jakarta.persistence.*
import java.time.LocalDateTime
import java.util.*

@Entity
@Table(name = "posts")
data class Post(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int,

    @Column(name = "content")
    val content: String,

    @Column(name = "post_number", nullable = false)
    val postNumber: String,

    @Column(name = "timestamp", nullable = false)
    val timestamp: LocalDateTime = LocalDateTime.now(),

    @ManyToOne
    @JoinColumn(name = "board_name", referencedColumnName = "name")
    val board: Board?,

    @ManyToOne
    @JoinColumn(name = "thread_title", referencedColumnName = "title")
    val thread: Optional<Thread>,

    @Column(name = "author", nullable = false)
    val author: String? = null,

    @Column(name = "op", nullable = false)
    val op: Boolean? = false,

    @Column(name = "title")
    val title: String? = null,

    @Column(name = "blob")
    val blob: String? = null,

    @ManyToOne
    @JoinColumn(name = "reply_to")
    val replyTo: Post? = null,
)

